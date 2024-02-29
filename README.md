# BVH-FORD-DEMO
 
### Requirements

[Node.js (v16 or above)](https://nodejs.org/en/)<br>
[GoLang](https://go.dev/doc/install)<br>
[Podman](https://podman.io/getting-started/installation.html)<br>
[Podman Compose](https://github.com/containers/podman-compose)

### Installing Frontend Dependencies

Move to `frontend` folder and `npm install`:

```ch
cd frontend
npm install
```

To start the app locally (http://localhost:3000/) run:

```
npm run start
```

### Installing Backend Dependencies

Move to `backend` folder:

```ch
cd backend
```

And run:

```ch
npm install
npx prisma migrate dev
```

To start the development database using `podman-compose`, run:

```ch
podman-compose up
```

🔔 `podman-compose` might as for a few confirmations on where to download its base containers from.

And start the API server:

```ch
npm run start:dev
```

Adminer Database Visualizer is served @ http://localhost:8080/ <br>
NestJS API endpoints are served @ http://localhost:3001/
