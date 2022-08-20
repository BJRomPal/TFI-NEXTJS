import numpy as np
import pandas as pd
import pymongo

# Lectura del dataset en utf-8 para que lea bien los datos en español
df = pd.read_csv('comisarias.csv', delimiter=',', encoding='utf-8')

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

# se pasan a lista las columnas que vamos a utilizar.
lista_nombre = df.nombre.tolist()
lista_barrios = df.barrio.tolist()
lista_direcciones = df.direccion.tolist()

# Se crea una lista que contendrá dicts, formato requerido para pymongo para subir a MongoDB
dic_comisarias = []
for i in range(len(lista_barrios)):
    comisaria = {'nombre': lista_nombre[i], 'domicilio' : lista_direcciones[i], 'barrio' : lista_barrios[i], 'location' : listado_geom[i]}
    dic_comisarias.append(comisaria)

from pymongo import MongoClient

# SE BORRÓ POR SEGURIDAD LA CONEXIÓN A LA BASE DE DATOS

#Subida de datos a MongoDB
db = client['hogarDB']
collection = db['comisarias']
collection.insert_many(dic_comisarias)

