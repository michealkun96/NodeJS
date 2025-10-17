import { ENV } from './config/ENV'
import app from './app'


const PORT = ENV.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
})