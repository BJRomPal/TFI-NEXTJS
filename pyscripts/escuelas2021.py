import numpy as np
import pandas as pd
import pymongo
import json


with open('escuelas.geojson', encoding='utf-8') as f:
    data = json.load(f)

escuelas = data['features']


lista_coordenadas = []
for i in range(len(escuelas)):
    coordenada = escuelas[i]['geometry']['coordinates']
    lista_coordenadas.append(coordenada)
series_coordenadas = pd.Series(lista_coordenadas)


lista_coordenadas_final = []
for i in range(len(series_coordenadas)):
    coordenada = series_coordenadas[i]
    try:
        lista_coordenadas_final.append(coordenada[0])
    except:
        lista_coordenadas_final.append(coordenada)  

coordenada_perdida = [-58.40348722884395, -34.58350102178689]
lista_coordenadas_final[2254].append(-58.40348722884395)
lista_coordenadas_final[2254].append(-34.58350102178689)

listado_geom = []
for lista in lista_coordenadas_final:
    dic = {'type': 'Point', 'coordinates': lista}
    listado_geom.append(dic)

lista_calles = []
for i in range(len(escuelas)):
    calle = escuelas[i]['properties']['dom_edific']
    lista_calles.append(calle)

lista_nombres = []
for i in range(len(escuelas)):
    nombre = escuelas[i]['properties']['nombre_est']
    lista_nombres.append(nombre)

lista_nivel = []
for i in range(len(escuelas)):
    nivel = escuelas[i]['properties']['nivelmodal']
    lista_nivel.append(nivel)

lista_dependencia = []
for i in range(len(escuelas)):
    dependencia = escuelas[i]['properties']['depfun']
    lista_dependencia.append(dependencia)

lista_dependencia_normalizada = []
for item in lista_dependencia:
    if item == 'Dirección General de Educación de Gestión Privada':
        lista_dependencia_normalizada.append('Privada')
    else:
        lista_dependencia_normalizada.append('Pública')

lista_barrio = []
for i in range(len(escuelas)):
    barrio = escuelas[i]['properties']['barrio']
    lista_barrio.append(barrio.title())

dic_escuelas = []
listado_duplicados = []
for i in range(len(lista_barrio)):
    if lista_calles[i] in listado_duplicados:
        continue
    else:
        escuela = {'nombre': lista_nombres[i], 'domicilio' : lista_calles[i], 'barrio' : lista_barrio[i], 
                   'nivel': lista_nivel[i], 'administracion' : lista_dependencia_normalizada[i], 
                  'location' : listado_geom[i]}
        dic_escuelas.append(escuela)
        listado_duplicados.append(lista_calles[i])

from pymongo import MongoClient

# ACA VA LA URI DE MONGO DB QUE POR SEGURIDAD FUE BORRADA

try:
    print(client.server_info())
except Exception:
    print("Unable to connect to the server.")

db = client['hogarDB']

collection = db['escuelas']

collection.insert_many(dic_escuelas)

