import numpy as np
import pandas as pd
import pymongo
from pymongo import MongoClient



data = pd.read_csv('delitos2021.csv', delimiter=';', encoding='utf-8')
dict_data = data.to_dict(orient='records')

# ACA VA LA URI DE MONGO DB QUE POR SEGURIDAD FUE BORRADA

db = client['hogarDB']
collection = db['delitos']

collection.insert_many(dict_data)

