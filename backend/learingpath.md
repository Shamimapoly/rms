Backend :
routes ( get , post , put, delete, patch) --->
---> middlewares (Security)
---> controller (Business Logic)
---> model ---> Crud (Create, Read, Update, Delete)

Cloud (Deploy ):
--->Bucket : files
---> cloud Database (mongodb,mysql,firestore,postgresql)
---> lamda function (Backend)

Frontend (Api Intrigration) :
Api Fetch (Tanstact Query and Axios) --->
---> api method : get , post , put, delete, patch
---> api payload : frontend data send
