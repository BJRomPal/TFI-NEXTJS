import numpy as np
import pandas as pd
import pymongo

df = pd.read_csv('cultural.csv', delimiter=',', encoding='utf-8')

df['FUNCION_PRINCIPAL'].value_counts()

df.iloc[2845, 2] = 'GALERIA DE ARTE'

df_simplificado = df[(df['FUNCION_PRINCIPAL'] == 'SALA DE CINE') | (df['FUNCION_PRINCIPAL'] == 'ESPACIO DE EXHIBICION') 
                 | (df['FUNCION_PRINCIPAL'] == 'BIBLIOTECA') | ((df['FUNCION_PRINCIPAL'] == 'ESPACIO ESCENICO') & (df['SUBCATEGORIA'] == 'TEATRO')) 
                 | ((df['FUNCION_PRINCIPAL'] == 'ESPACIO ESCENICO') & (df['SUBCATEGORIA'] == 'SALA DE TEATRO'))]

df_cultural = df_simplificado[['FUNCION_PRINCIPAL', 'SUBCATEGORIA', 'ESTABLECIMIENTO', 'DIRECCION', 'BARRIO', 'LATITUD', 'LONGITUD']]

df_cultural.drop_duplicates(subset=['DIRECCION'], inplace=True)
df_cultural.reset_index(inplace=True, drop=True)

df_cultural.iloc[591, 3] = 'MARTINEZ CASTRO SIN N°'

lista_coordenadas = []
for i in range(len(df_cultural)):
    longitud = df_cultural['LONGITUD'][i]
    latitud = df_cultural['LATITUD'][i]
    long_y_lat = [longitud, latitud]
    lista_coordenadas.append(long_y_lat)

listado_geom = []
for lista in lista_coordenadas:
    dic = {'type': 'Point', 'coordinates': lista}
    listado_geom.append(dic)


df_cultural.iloc[1161,1] = 'GALERIA DE ARTE'

lista_teatro = df_cultural[df_cultural['SUBCATEGORIA'] == 'TEATRO'].index.tolist()

for lista in lista_teatro:
    df_cultural.iloc[lista, 1] = "SALA DE TEATRO"

lista_funcion_principal = []
lista_establecimiento = []
lista_barrios =[]
lista_direcciones = []

for i in range(len(df_cultural)):
    if df_cultural['SUBCATEGORIA'][i] == 'SALA DE TEATRO' or df_cultural['SUBCATEGORIA'][i] == 'MUSEO' or df_cultural['SUBCATEGORIA'][i] == 'GALERIA DE ARTE': 
        lista_funcion_principal.append(df_cultural['SUBCATEGORIA'][i])
    else: 
        lista_funcion_principal.append(df_cultural['FUNCION_PRINCIPAL'][i])
    lista_establecimiento.append(df_cultural['ESTABLECIMIENTO'][i])
    lista_barrios.append(df_cultural['BARRIO'][i])
    lista_direcciones.append(df_cultural['DIRECCION'][i])
   

dic_cultural = []
for i in range(len(lista_barrios)):
    cultura = {'nombre': lista_establecimiento[i], 'domicilio' : lista_direcciones[i], 'barrio' : lista_barrios[i], 
               'categoria' : lista_funcion_principal[i], 'location' : listado_geom[i]}
    dic_cultural.append(cultura)


from pymongo import MongoClient


db = client['hogarDB']
collection = db['cultural']
collection.insert_many(dic_cultural)

