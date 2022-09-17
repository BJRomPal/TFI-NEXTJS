const comisarias = [{'id': 0,
'nombre': 'Comisaria Vecinal 1-D',
'domicilio': 'LAVALLE 451',
'barrio': 'SAN NICOLAS',
'location': {'type': 'Point',
 'coordinates': [-58.37324471219407, -34.601906174962245]}},
{'id': 1,
'nombre': 'Comisaria Vecinal 5-B',
'domicilio': 'MUÑIZ 1250',
'barrio': 'BOEDO',
'location': {'type': 'Point',
 'coordinates': [-58.42492623842034, -34.6286410416508]}},
{'id': 2,
'nombre': 'Comisaria Vecinal 6-A',
'domicilio': 'DIAZ VELEZ AV. 5152',
'barrio': 'CABALLITO',
'location': {'type': 'Point',
 'coordinates': [-58.43950143296866, -34.608978570123014]}},
{'id': 3,
'nombre': 'Comisaria Vecinal 7-B',
'domicilio': 'VALLE 1454',
'barrio': 'CABALLITO',
'location': {'type': 'Point',
 'coordinates': [-58.448087212589755, -34.6267799123199]}},
{'id': 4,
'nombre': 'Comisaria Comunal 6',
'domicilio': 'AVELLANEDA AV. 1548',
'barrio': 'CABALLITO',
'location': {'type': 'Point',
 'coordinates': [-58.453221042358265, -34.62038226566912]}},
{'id': 5,
'nombre': 'Comisaria Comunal 1',
'domicilio': 'SUIPACHA 1156',
'barrio': 'RETIRO',
'location': {'type': 'Point',
 'coordinates': [-58.38017801898808, -34.59464291225724]}},
{'id': 6,
'nombre': 'Comisaria Vecinal 1-C (edificio anexo)',
'domicilio': 'SAN JOSE 1224',
'barrio': 'CONSTITUCION',
'location': {'type': 'Point',
 'coordinates': [-58.38560777288463, -34.622670050365095]}},
{'id': 7,
'nombre': 'Comisaria Comunal 2',
'domicilio': 'LAS HERAS GENERAL AV. 1861',
'barrio': 'RECOLETA',
'location': {'type': 'Point',
 'coordinates': [-58.39235857682059, -34.591136945873416]}},
{'id': 8,
'nombre': 'Comisaria Vecinal 1-C',
'domicilio': 'SAN JUAN AV. 1757',
'barrio': 'CONSTITUCION',
'location': {'type': 'Point',
 'coordinates': [-58.390748668282605, -34.62258675877597]}},
{'id': 9,
'nombre': 'Comisaria Vecinal 2-B',
'domicilio': 'CHARCAS 2844',
'barrio': 'RECOLETA',
'location': {'type': 'Point',
 'coordinates': [-58.40671929203017, -34.594078522593456]}},
{'id': 10,
'nombre': 'Comisaria Vecinal 1-B (edificio anexo)',
'domicilio': 'PERU 1056',
'barrio': 'SAN TELMO',
'location': {'type': 'Point',
 'coordinates': [-58.37414712408447, -34.620278488629]}},
{'id': 11,
'nombre': 'Comisaria Vecinal 3-B',
'domicilio': 'CATAMARCA 1345',
'barrio': 'SAN CRISTOBAL',
'location': {'type': 'Point',
 'coordinates': [-58.4032266269794, -34.626032231837875]}},
{'id': 12,
'nombre': 'Comisaria Vecinal 14-A',
'domicilio': 'ALVAREZ, JULIAN 2373',
'barrio': 'PALERMO',
'location': {'type': 'Point',
 'coordinates': [-58.41592730316615, -34.58773209769253]}},
{'id': 13,
'nombre': 'Comisaria Vecinal 1-E',
'domicilio': 'HUERGO, ING. AV. 1500',
'barrio': 'PUERTO MADERO',
'location': {'type': 'Point',
 'coordinates': [-58.363990210472046, -34.624279357208245]}},
{'id': 14,
'nombre': 'Comisaria Vecinal 4-C',
'domicilio': 'PINZON 456',
'barrio': 'BOCA',
'location': {'type': 'Point',
 'coordinates': [-58.360587582793436, -34.63416920703778]}},
{'id': 15,
'nombre': 'Comisaria Vecinal 4-D (edificio anexo)',
'domicilio': 'MONTES DE OCA, MANUEL 861',
'barrio': 'BARRACAS',
'location': {'type': 'Point',
 'coordinates': [-58.37490858974908, -34.63806272113112]}},
{'id': 16,
'nombre': 'Comisaria Vecinal 15-B',
'domicilio': 'CAMARGO 645',
'barrio': 'VILLA CRESPO',
'location': {'type': 'Point',
 'coordinates': [-58.441084301406406, -34.599320559247566]}},
{'id': 17,
'nombre': 'Comisaria Vecinal 1-A',
'domicilio': 'TUCUMAN 1560',
'barrio': 'SAN NICOLAS',
'location': {'type': 'Point',
 'coordinates': [-58.38889587843118, -34.6019397377213]}},
{'id': 18,
'nombre': 'Comisaria Vecinal 4-D',
'domicilio': 'CALIFORNIA 1850',
'barrio': 'BARRACAS',
'location': {'type': 'Point',
 'coordinates': [-58.37472729162052, -34.64728405029203]}},
{'id': 19,
'nombre': 'Comisaria Vecinal 14-B',
'domicilio': 'CABILDO AV. 232',
'barrio': 'PALERMO',
'location': {'type': 'Point',
 'coordinates': [-58.43895579981542, -34.5733085675013]}},
{'id': 20,
'nombre': 'Comisaria Vecinal 13-C',
'domicilio': 'MENDOZA 2263',
'barrio': 'BELGRANO',
'location': {'type': 'Point',
 'coordinates': [-58.4562848137145, -34.56014476912708]}},
{'id': 21,
'nombre': 'Comisaria Vecinal 4-B',
'domicilio': 'QUILMES 456',
'barrio': 'NUEVA POMPEYA',
'location': {'type': 'Point',
 'coordinates': [-58.41715600739127, -34.64479474193998]}},
{'id': 22,
'nombre': 'Comisaria Vecinal 13-B',
'domicilio': 'CUBA 3145',
'barrio': 'NUÑEZ',
'location': {'type': 'Point',
 'coordinates': [-58.46332662713954, -34.55137550494904]}},
{'id': 23,
'nombre': 'Comisaria Vecinal 8-B',
'domicilio': 'ESCALADA AV. 4347',
'barrio': 'VILLA SOLDATI',
'location': {'type': 'Point',
 'coordinates': [-58.4542669378969, -34.67735751376322]}},
{'id': 24,
'nombre': 'Comisaria Vecinal 12-C',
'domicilio': 'JURAMENTO 4367',
'barrio': 'VILLA URQUIZA',
'location': {'type': 'Point',
 'coordinates': [-58.47582109143319, -34.573116280337935]}},
{'id': 25,
'nombre': 'Comisaria Comunal 7',
'domicilio': 'BONORINO, ESTEBAN, Cnel. AV. 258',
'barrio': 'FLORES',
'location': {'type': 'Point',
 'coordinates': [-58.458256002822, -34.630923532550966]}},
{'id': 26,
'nombre': 'Comisaria Vecinal 12-B',
'domicilio': 'OLAZABAL AV. 5437',
'barrio': 'VILLA URQUIZA',
'location': {'type': 'Point',
 'coordinates': [-58.49005740893347, -34.57868946950526]}},
{'id': 27,
'nombre': 'Comisaria Vecinal 1-B',
'domicilio': 'TACUARI 770',
'barrio': 'MONSERRAT',
'location': {'type': 'Point',
 'coordinates': [-58.37857749366271, -34.617161610468784]}},
{'id': 28,
'nombre': 'Comisaria Vecinal 9-B',
'domicilio': 'REMEDIOS 3748',
'barrio': 'PARQUE AVELLANEDA',
'location': {'type': 'Point',
 'coordinates': [-58.47633670650636, -34.641462310639]}},
{'id': 29,
'nombre': 'Comisaria Comunal 11',
'domicilio': 'BUFANO, ALFREDO R. 1800',
'barrio': 'VILLA GRAL. MITRE',
'location': {'type': 'Point',
 'coordinates': [-58.47299114352755, -34.6111204124573]}},
{'id': 30,
'nombre': 'Comisaria Comunal 9',
'domicilio': 'DE LA TORRE, LISANDRO AV. 2343',
'barrio': 'MATADEROS',
'location': {'type': 'Point',
 'coordinates': [-58.501165657356765, -34.66199393122683]}},
{'id': 31,
'nombre': 'Comisaria Comunal 10',
'domicilio': 'CHIVILCOY 453',
'barrio': 'FLORESTA',
'location': {'type': 'Point',
 'coordinates': [-58.4837795082987, -34.62880668537468]}},
{'id': 32,
'nombre': 'Comisaria Vecinal 10-B',
'domicilio': 'PORCEL DE PERALTA, MANUEL 726',
'barrio': 'VERSALLES',
'location': {'type': 'Point',
 'coordinates': [-58.52403884904741, -34.629536123433425]}},
{'id': 33,
'nombre': 'Comisaria Vecinal 11-B',
'domicilio': 'CUBAS, JOSE 4154',
'barrio': 'VILLA DEVOTO',
'location': {'type': 'Point',
 'coordinates': [-58.51560587747178, -34.59831464853968]}},
{'id': 34,
'nombre': 'Comisaria Vecinal 11-B (edificio anexo)',
'domicilio': 'NAZCA 4254',
'barrio': 'VILLA PUEYRREDON',
'location': {'type': 'Point',
 'coordinates': [-58.499367255482, -34.58971283495772]}},
{'id': 35,
'nombre': 'Comisaria Vecinal 8-A',
'domicilio': 'LEGUIZAMON, MARTINIANO 4347',
'barrio': 'VILLA LUGANO',
'location': {'type': 'Point',
 'coordinates': [-58.47488885529077, -34.67903501932798]}},
{'id': 36,
'nombre': 'Comisaria Vecinal 12-A',
'domicilio': 'MACHAIN 3045',
'barrio': 'VILLA URQUIZA',
'location': {'type': 'Point',
 'coordinates': [-58.482525446886825, -34.56514509801703]}},
{'id': 37,
'nombre': 'Comisaria Comunal 3',
'domicilio': 'LAVALLE 1958',
'barrio': 'BALVANERA',
'location': {'type': 'Point',
 'coordinates': [-58.39478912465725, -34.603418415535614]}},
{'id': 38,
'nombre': 'Comisaria Vecinal 7-C',
'domicilio': 'GAONA AV. 2738',
'barrio': 'FLORES',
'location': {'type': 'Point',
 'coordinates': [-58.46482092153075, -34.616113715966975]}},
{'id': 39,
'nombre': 'Comisaria Comunal 13',
'domicilio': 'ARTILLEROS 2081',
'barrio': 'BELGRANO',
'location': {'type': 'Point',
 'coordinates': [-58.444068027691536, -34.55482164690124]}},
{'id': 40,
'nombre': 'Comisaria Comunal 8',
'domicilio': 'DIAZ ANA Y CAFAYATE',
'barrio': 'VILLA LUGANO',
'location': {'type': 'Point',
 'coordinates': [-58.46894368782272, -34.683121229081834]}},
{'id': 41,
'nombre': 'Comisaria Comunal 14',
'domicilio': 'REPUBLICA ARABE SIRIA 2961',
'barrio': 'PALERMO',
'location': {'type': 'Point',
 'coordinates': [-58.4136589185154, -34.581269722933584]}},
{'id': 42,
'nombre': 'Comisaria Vecinal 10-C',
'domicilio': 'BASUALDO 165',
'barrio': 'VILLA LURO',
'location': {'type': 'Point',
 'coordinates': [-58.505086527128014, -34.63996692356713]}},
{'id': 43,
'nombre': 'Comisaria Vecinal 3-A',
'domicilio': 'LAVALLE 2625',
'barrio': 'BALVANERA',
'location': {'type': 'Point',
 'coordinates': [-58.40401064094301, -34.6032111757525]}},
{'id': 44,
'nombre': 'Comisaria Vecinal 3-A (edificio anexo)',
'domicilio': 'URQUIZA, Gral. 544',
'barrio': 'BALVANERA',
'location': {'type': 'Point',
 'coordinates': [-58.409279648726304, -34.61705760594242]}},
{'id': 45,
'nombre': 'Comisaria Comunal 5',
'domicilio': 'BILLINGHURST 471',
'barrio': 'ALMAGRO',
'location': {'type': 'Point',
 'coordinates': [-58.41555876346776, -34.604428600364265]}},
{'id': 46,
'nombre': 'Comisaria Comunal 12',
'domicilio': 'RAMALLO 4398',
'barrio': 'SAAVEDRA',
'location': {'type': 'Point',
 'coordinates': [-58.49090923686367, -34.551103084235464]}},
{'id': 47,
'nombre': 'Comisaria Comunal 15',
'domicilio': 'GUZMAN 396',
'barrio': 'CHACARITA',
'location': {'type': 'Point',
 'coordinates': [-58.45123039328284, -34.590420189796575]}},
{'id': 48,
'nombre': 'Comisaria Comunal 4',
'domicilio': 'ZAVALETA 425',
'barrio': 'PARQUE PATRICIOS',
'location': {'type': 'Point',
 'coordinates': [-58.40283020899448, -34.641949534782775]}}]

 export default comisarias;