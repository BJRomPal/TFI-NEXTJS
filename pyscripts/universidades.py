import numpy as np
import pandas as pd
import pymongo

# Lectura del dataset en utf-8 para que lea bien los datos en español
df = pd.read_csv('universidades.csv', delimiter=',', encoding='utf-8')

# Se eliminan los duplicados tomando como punto la dirección_norm
df.drop_duplicates(subset=['direccion_norm'], inplace=True)

# Se obtienen aquellas universidades que solo aparecen una vez y se obtiene su listado.
df_counts = df.universida.value_counts().to_frame()
df_counts_unicos = df_counts[22:]
listado_unicos = df_counts_unicos.index.to_list()

# Se cambia la columan de esas universidades donde debe ir la facultad a Varias Facultades.
for i in range(len(df)):
    if df.iloc[i, 1] in listado_unicos:
        df.iloc[i, 3] = 'Varias Facultades'
    else:
        continue

# Se pasan la longitud y latitud a una lista
longitud = df.long.tolist()
latitud = df.lat.tolist()

# Función que crea dict para los datos geom con el formato requerido por MongoDB
def create_geom (longitud, latitud):
    lista_coordenadas = []
    for i in range(len(longitud)):
        long_y_lat = [longitud[i], latitud[i]]
        lista_coordenadas.append(long_y_lat)
    listado_geom = []
    for lista in lista_coordenadas:
        dic = {'type': 'Point', 'coordinates': lista}
        listado_geom.append(dic)
    return listado_geom

listado_geom = create_geom(longitud, latitud)

# Se cambia la dirección y Barrio del ITBA para actualizarla.
df.iloc[1, 11] = 'San Martín 202'
df.iloc[1, 15] = 'San Nicolás'

lista_nombre = df.universida.tolist()
lista_facultad = df.unidad_aca.tolist()
lista_regimen = df.regimen.tolist()
lista_barrios = df.barrio.tolist()
lista_direcciones = df.direccion_norm.tolist()

# Se crea una lista que contendrá dicts, formato requerido para pymongo para subir a MongoDB
dic_universidades = []
for i in range(len(lista_barrios)):
    universidad = {'nombre': lista_nombre[i], 'facultad': lista_facultad[i], 'administracion': lista_regimen[i], 
                   'domicilio' : lista_direcciones[i], 'barrio' : lista_barrios[i], 'location' : listado_geom[i]}
    dic_universidades.append(universidad)

from pymongo import MongoClient
# SE BORRÓ POR SEGURIDAD LA CONEXIÓN A LA BASE DE DATOS

#Subida de datos a MongoDB
db = client['hogarDB']
collection = db['universidades']
collection.insert_many(dic_universidades)

