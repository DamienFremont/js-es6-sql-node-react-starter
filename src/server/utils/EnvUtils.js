import dotenv from 'dotenv';

class EnvUtils {

    static initOrOverride() {
        if (process.env.NODE_ENV !== 'production') {
            dotenv.config();
            console.log('warn: Loaded Env file over Node process.env');
        }
    }
}
export default EnvUtils;