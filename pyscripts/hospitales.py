import numpy as np
import pandas as pd
import pymongo

# Lectura del dataset en utf-8 para que lea bien los datos en español. Los hospitales están en dos datasets diferentes
df_privados = pd.read_csv('Hprivados.csv', delimiter=',', encoding='utf-8')
df_publicos = pd.read_csv('Hpublicos.csv', delimiter=',', encoding='utf-8')

# Las direcciones están separadas en calle y número por lo que se unen en la misma columna.
direcciones = []
for i in range(len(df_privados)):
    direccion = df_privados['calle'][i] + " " + str(df_privados['altura'][i])
    direcciones.append(direccion)

df_privados['direccion'] = direcciones

# Se hace lo mismo con los públicos.
direcciones_publicos = []
for i in range(len(df_publicos)):
    direccion = df_publicos['CALLE'][i] + ' ' + str(df_publicos['ALTURA'][i])
    direcciones_publicos.append(direccion)

# Se buscan manualmente los barrios de los hospitales públicos ya que no están en el dataset. 
lista_barrios = [
    'Barracas',
    'Recoleta',
    'Recoleta',
    'Barracas',
    'Parque Patricios',
    'Caballito',
    'Barracas',
    'Barracas',
    'Barracas',
    'Boca',
    'Belgrano',
    'Parque Patricios',
    'Villa General Mitre',
    'Almagro',
    'Caballito',
    'Caballito',
    'San Cristobal',
    'Monte Castro',
    'Parque Patricios',
    'Paternal',
    'Recoleta',
    'Boca',
    'Palermo',
    'Caballito',
    'Caballito',
    'Balvanera',
    'Belgrano',
    'Villa Devoto',
    'Monte Castro',
    'Liniers',
    'Parque  Patricios',
    'Parque Chas',
    'Flores',
    'Villa Soldati',
    'Parque Patricios',
    'Barracas'
]

# Se agrega la dirección que falta de un hospital público.
direcciones_publicos[-3] = 'AV GENERAL FRANCISCO FERNANDEZ DE LA CRUZ 4402'

# se agregan las direcciones, barrios y coordenadas.
df_publicos['direccion'] = direcciones_publicos
df_publicos['barrio'] =lista_barrios

coordenadas_publicos = [
[-58.3775508488443, -34.6288473603881],
[-58.4120700769456, -34.5941919726393],
[-58.4027276547828, -34.5845283357505],
[-58.3851559118889, -34.6394041316484],
[-58.3913114406535, -34.6341535760002],
[-58.4349433479819, -34.6084721257413],
[-58.3758433488021, -34.6302112044495],
[-58.3823284509488, -34.6357022351559],
[-58.3821283746958, -34.6364350546569],
[-58.3601201271455, -34.6388917320834],
[-58.4409882382439, -34.5538963316473],
[-58.4027506275377, -34.634856308415],
[-58.4601855775528, -34.6054342750207],
[-58.4276597542837, -34.6146348348429],
[-58.4332484381295, -34.6070507603866],
[-58.4323966950244, -34.6255031952483],
[-58.3940641604746, -34.6227125075124],
[-58.5021449222222, -34.6179817540591],
[-58.3937269413225, -34.6375293258416],
[-58.4752588459761, -34.5972098729151],
[-58.4005134574423, -34.5847659581214],
[-58.365985088719, -34.6283448581677],
[-58.4068939142787, -34.581141710889],
[-58.437981361705, -34.6089728538414],
[-58.4695020363265, -34.6241704940114],
[-58.4096107488155, -34.6176598438607],
[-58.4710781593251, -34.565051956568],
[-58.5110525000569, -34.599979524264],
[-58.50761514092, -34.6253367952668],
[-58.5156291936709, -34.6491867281064],
[-58.4108602188291, -34.6431172591975],
[-58.4710976282168, -34.5873917690227],
[-58.4541167814714, -34.643894071866],
[-58.4566428491103, -34.6718480140772],
[-58.3918791813882, -34.6299453614404],
[-58.3814293381891, -34.6419888014928]
]

# Se obtienen las coordenadas de los privados.
coordenadas_privados = []
for i in range(len(df_privados)):
    long = df_privados['long'][i]
    lat = df_privados['lat'][i]
    long_y_lat = [long, lat]
    coordenadas_privados.append(long_y_lat)


df_privados['administracion'] = 'Privada'
df_publicos['administracion'] = 'Publico'

# se unen en unas mismas listas a los públicos y privados. 
lista_nombres = []
lista_administracion =[]
lista_barrios =[]
lista_direcciones = []
for i in range(len(df_privados)):
    lista_nombres.append(df_privados['nombre'][i])
    lista_administracion.append(df_privados['administracion'][i])
    lista_barrios.append(df_privados['barrio'][i])
    lista_direcciones.append(df_privados['direccion'][i])


for i in range(len(df_publicos)):
    lista_nombres.append(df_publicos['NOM_MAP'][i])
    lista_administracion.append(df_publicos['administracion'][i])
    lista_barrios.append(df_publicos['barrio'][i])
    lista_direcciones.append(df_publicos['direccion'][i])


lista_coordenadas = coordenadas_privados + coordenadas_publicos

listado_geom = []
for lista in lista_coordenadas:
    dic = {'type': 'Point', 'coordinates': lista}
    listado_geom.append(dic)

# Se crea una lista que contendrá dicts, formato requerido para pymongo para subir a MongoDB
dic_hospitales = []
for i in range(len(lista_barrios)):
    hospital = {'nombre': lista_nombres[i], 'domicilio' : lista_direcciones[i], 'barrio' : lista_barrios[i], 
               'administracion' : lista_administracion[i], 'location' : listado_geom[i]}
    dic_hospitales.append(hospital)


from pymongo import MongoClient
# SE BORRÓ POR SEGURIDAD LA CONEXIÓN A LA BASE DE DATOS

#Subida de datos a MongoDB
db = client['hogarDB']
collection = db['hospitales']
collection.insert_many(dic_hospitales)

