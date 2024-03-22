# Ensolvers challenge

## Consignas y breve explicación

- [x] As a user, I want to be able to create, edit and delete notes
- [x] As a user, I want to archive/unarchive notes
- [x] As a user, I want to list both my active notes
- [x] As a user, I want to list both my archived notes
- [x] As a user, I want to be able to add/remove categories to notes
- [x] As a user, I want to be able to filter notes by category

### Base de datos
![Texto alternativo](./images/db.png)
### Backend
Se usó JWT y passport para la protección de controladores (users, catgories, notes). 
Para probar durante el desarrollo se utilizó Postman con la siguiente collection (podria estar desfasada respecto a la version final de los endpoints utilizados).

<details>
  <summary>Collection</summary>

```json
{
  "collection": {
    "info": {
      "_postman_id": "3db62480-9392-479b-aaa9-b84fbdd1d58b",
      "name": "Ensolvers challenge",
      "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
      "updatedAt": "2024-03-22T20:56:14.000Z",
      "uid": "18308329-3db62480-9392-479b-aaa9-b84fbdd1d58b",
      "createdAt": null,
      "lastUpdatedBy": null
    },
    "item": [
      {
        "name": "register",
        "id": "f9197d2e-1fc5-464b-b1a1-1bbe35acb714",
        "protocolProfileBehavior": {
          "disableBodyPruning": true
        },
        "request": {
          "method": "POST",
          "header": [
            
          ],
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"email\":\"martin@lazo.us\",\r\n    \"password\":\"12345678\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          },
          "url": {
            "raw": "localhost:3000/auth/register",
            "host": [
              "localhost"
            ],
            "port": "3000",
            "path": [
              "auth",
              "register"
            ]
          }
        },
        "response": [
          
        ],
        "uid": "18308329-f9197d2e-1fc5-464b-b1a1-1bbe35acb714"
      },
      {
        "name": "create category",
        "id": "505bdd5c-ca8b-4b26-804e-3016de6c7031",
        "protocolProfileBehavior": {
          "disableBodyPruning": true
        },
        "request": {
          "method": "POST",
          "header": [
            
          ],
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"name\":\"Public\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          },
          "url": {
            "raw": "localhost:3000/categories",
            "host": [
              "localhost"
            ],
            "port": "3000",
            "path": [
              "categories"
            ]
          }
        },
        "response": [
          
        ],
        "uid": "18308329-505bdd5c-ca8b-4b26-804e-3016de6c7031"
      },
      {
        "name": "create note",
        "id": "151b6486-b4eb-4f69-b55c-02a516248bd7",
        "protocolProfileBehavior": {
          "disableBodyPruning": true
        },
        "request": {
          "method": "POST",
          "header": [
            
          ],
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"title\":\"Test 1\",\r\n    \"content\":\"Esta es una nota de prueba\",\r\n    \"userId\":1\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          },
          "url": {
            "raw": "localhost:3000/notes",
            "host": [
              "localhost"
            ],
            "port": "3000",
            "path": [
              "notes"
            ]
          }
        },
        "response": [
          
        ],
        "uid": "18308329-151b6486-b4eb-4f69-b55c-02a516248bd7"
      },
      {
        "name": "edit category",
        "id": "12959050-2335-451b-b1e4-fcc4c403cf1f",
        "protocolProfileBehavior": {
          "disableBodyPruning": true
        },
        "request": {
          "method": "PATCH",
          "header": [
            
          ],
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"name\":\"Danger\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          },
          "url": {
            "raw": "localhost:3000/categories/2",
            "host": [
              "localhost"
            ],
            "port": "3000",
            "path": [
              "categories",
              "2"
            ]
          }
        },
        "response": [
          
        ],
        "uid": "18308329-12959050-2335-451b-b1e4-fcc4c403cf1f"
      },
      {
        "name": "edit note",
        "id": "83d138ed-933d-4f84-a214-c9d9dafc084e",
        "protocolProfileBehavior": {
          "disableBodyPruning": true
        },
        "request": {
          "method": "PATCH",
          "header": [
            
          ],
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"categoriesIds\":[2],\r\n    \"archived\":true\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          },
          "url": {
            "raw": "localhost:3000/notes/1",
            "host": [
              "localhost"
            ],
            "port": "3000",
            "path": [
              "notes",
              "1"
            ]
          }
        },
        "response": [
          
        ],
        "uid": "18308329-83d138ed-933d-4f84-a214-c9d9dafc084e"
      },
      {
        "name": "login",
        "id": "8989cac9-837a-4d31-bf78-06f3570f4c08",
        "protocolProfileBehavior": {
          "disableBodyPruning": true
        },
        "request": {
          "method": "POST",
          "header": [
            
          ],
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"email\":\"martin@lazo.us\",\r\n    \"password\":\"12345678\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          },
          "url": {
            "raw": "localhost:3000/auth/register",
            "host": [
              "localhost"
            ],
            "port": "3000",
            "path": [
              "auth",
              "register"
            ]
          }
        },
        "response": [
          
        ],
        "uid": "18308329-8989cac9-837a-4d31-bf78-06f3570f4c08"
      },
      {
        "name": "get all users",
        "id": "7e8eb011-7b49-4523-8578-8b242ea99873",
        "protocolProfileBehavior": {
          "disableBodyPruning": true
        },
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYXJ0aW5AbGF6by51cyIsIm5hbWUiOiJNYXJ0aW4iLCJpYXQiOjE3MTA4NjY4NjIsImV4cCI6MTcxMDkxMDA2Mn0.jbK_gGlhbHaNIT2YeERiqgFuO6b5Cn8P9i_sCrx4L4U",
                "type": "string"
              }
            ]
          },
          "method": "GET",
          "header": [
            
          ],
          "body": {
            "mode": "raw",
            "raw": "",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          },
          "url": {
            "raw": "localhost:3000/users",
            "host": [
              "localhost"
            ],
            "port": "3000",
            "path": [
              "users"
            ]
          }
        },
        "response": [
          
        ],
        "uid": "18308329-7e8eb011-7b49-4523-8578-8b242ea99873"
      },
      {
        "name": "get all notes",
        "id": "b76da157-2eb8-4087-8084-e169b712c0fb",
        "protocolProfileBehavior": {
          "disableBodyPruning": true
        },
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYXJ0aW5AbGF6by51cyIsIm5hbWUiOiJNYXJ0aW4iLCJpYXQiOjE3MTA4NjY4NjIsImV4cCI6MTcxMDkxMDA2Mn0.jbK_gGlhbHaNIT2YeERiqgFuO6b5Cn8P9i_sCrx4L4U",
                "type": "string"
              }
            ]
          },
          "method": "GET",
          "header": [
            
          ],
          "body": {
            "mode": "raw",
            "raw": "",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          },
          "url": {
            "raw": "localhost:3000/notes",
            "host": [
              "localhost"
            ],
            "port": "3000",
            "path": [
              "notes"
            ]
          }
        },
        "response": [
          
        ],
        "uid": "18308329-b76da157-2eb8-4087-8084-e169b712c0fb"
      },
      {
        "name": "get all notes by user",
        "id": "74ddc1b2-730a-4868-9c8a-9c083335dfe8",
        "protocolProfileBehavior": {
          "disableBodyPruning": true
        },
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYXJ0aW5AbGF6by51cyIsIm5hbWUiOiJNYXJ0aW4iLCJpYXQiOjE3MTA4NjY4NjIsImV4cCI6MTcxMDkxMDA2Mn0.jbK_gGlhbHaNIT2YeERiqgFuO6b5Cn8P9i_sCrx4L4U",
                "type": "string"
              }
            ]
          },
          "method": "GET",
          "header": [
            
          ],
          "body": {
            "mode": "raw",
            "raw": "",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          },
          "url": {
            "raw": "localhost:3000/notes/1",
            "host": [
              "localhost"
            ],
            "port": "3000",
            "path": [
              "notes",
              "1"
            ]
          }
        },
        "response": [
          
        ],
        "uid": "18308329-74ddc1b2-730a-4868-9c8a-9c083335dfe8"
      },
      {
        "name": "get all categories",
        "id": "f60b36de-0676-4353-947a-923604f81686",
        "protocolProfileBehavior": {
          "disableBodyPruning": true
        },
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYXJ0aW5AbGF6by51cyIsIm5hbWUiOiJNYXJ0aW4iLCJpYXQiOjE3MTA4NjY4NjIsImV4cCI6MTcxMDkxMDA2Mn0.jbK_gGlhbHaNIT2YeERiqgFuO6b5Cn8P9i_sCrx4L4U",
                "type": "string"
              }
            ]
          },
          "method": "GET",
          "header": [
            
          ],
          "body": {
            "mode": "raw",
            "raw": "",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          },
          "url": {
            "raw": "localhost:3000/categories",
            "host": [
              "localhost"
            ],
            "port": "3000",
            "path": [
              "categories"
            ]
          }
        },
        "response": [
          
        ],
        "uid": "18308329-f60b36de-0676-4353-947a-923604f81686"
      }
    ]
  }
}
```
</details>

### Frontend
Se usó Vite como punto de partida con React, Typescript. Durante el desarrollo se contempló una estrategia mas robusta de protección de rutas pero debido a la simplicidad de lo pedido se optó por usar redirecciones mediante la fase de renderización de las vistas.

## Tecnologias utilizadas
* NestJs (Ts)
* ReactJs (Ts)
* Docker
* Mui material
* JWT
* PostgreSQL
* TypeORM
* Formik

## Instalación
Para correr el proyecto se necesita tener previamente instalado Docker y Docker compose.

## Uso
Una vez instaladas corremos el siguiente comando en la raiz del proyecto
```
docker-compose up -d --build
```
Los puertos expuestos son los siguientes:
* [Frontend](http://localhost:3001)
* [Backend](http://localhost:3000)

## Notas y consideraciones
El presente proyecto se encuentra en fase de desarrollo y como tal le faltan algunos detalles que aunque se tuvieron en cuenta durante la construcción, debido al caracter de prueba se decidió no encararlos. Estos son:
* Uso de un gestor de estado global (Redux, Context, Zustand), para evitar el drilling en algunos componentes.
* Uso de variables globales, por cuestiones de seguridad y practicidad. 