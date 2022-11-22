import { Router } from "./routes.js"

const router = new Router()
router.add('/','/Pages/home.html')
router.add('/TheUniverse','/Pages/TheUniverse.html')
router.add('/Explorer','/Pages/Explorer.html')
router.add( 404,'/Pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()