import numpy as np
import pandas as pd
import pymongo

# Lectura del dataset en utf-8 para que lea bien los datos en español
df = pd.read_csv('gastronomia.csv', delimiter=',', encoding='utf-8')

# Se verifica aquellos datos que tienen null en categoria de restaurant y tipo de cocina y se fijan en No especificado
categoria_null = df[df['categoria'].isnull()].index.tolist()

for categoria in categoria_null:
    df.iloc[categoria, 4] = 'No especificado'

cocina_null = df[df['cocina'].isnull()].index.tolist()
for cocina in cocina_null:
    df.iloc[cocina, 5] = 'No especificado'

# Este restaurant no tenía la dirección se coloca manualmente.
df.iloc[2822, 13] = 'Camargo 490'

# El barrio Nuñez estaba mas especificado y se modifica correctamente a Nuñez
barrio_mal = df[df['barrio'] == 'NuÃƒÂ±ez'].index.tolist()
for barrio in barrio_mal:
    df.iloc[barrio, 14] = 'Nuñez'

# Se pasan la longitud y latitud a lista y se forma el geom.
longitud = df.long.tolist()
latitud = df.lat.tolist()

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

lista_nombre = df.nombre.tolist()
lista_categoria = df.categoria.tolist()
lista_cocina = df.cocina.tolist()
lista_barrios = df.barrio.tolist()
lista_direcciones = df.direccion_completa.tolist()

# Se crea una lista que contendrá dicts, formato requerido para pymongo para subir a MongoDB
dic_gastronomia = []
for i in range(len(lista_barrios)):
    gastronomia = {'nombre': lista_nombre[i], 'categoria' : lista_categoria[i], 'cocina' : lista_cocina[i],
               'domicilio' : lista_direcciones[i], 'barrio' : lista_barrios[i], 'location' : listado_geom[i]}
    dic_gastronomia.append(gastronomia)

from pymongo import MongoClient
# SE BORRÓ POR SEGURIDAD LA CONEXIÓN A LA BASE DE DATOS

#Subida de datos a MongoDB
db = client['hogarDB']
collection = db['gastronomia']
collection.insert_many(dic_gastronomia)

