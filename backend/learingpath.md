Backend :
routes ( get , post , put, delete, patch) --->
---> middlewares (jwt, Security)
---> controller (Business Logic)
---> model ---> Crud (Create, Read, Update, Delete)

Frontend (Api Intrigration) :
Api Fetch (Tanstact Query and Axios) --->
---> axios instence config --->
---> api method : get , post , put, delete, patch
---> api payload : frontend data send 

Cloud (Deploy ): 
---> deploy hosting (frontend)
--->Bucket : files (png,jpeg,pdf,any type of file)
---> cloud Database (mongodb,mysql,firestore,postgresql)
---> lamda function (Backend)

