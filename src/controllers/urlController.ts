import {controller, get, post, StaticController, params} from '@appolo/route';
import {init, inject, singleton, alias} from '@appolo/inject';
import {UrlCompressManager} from "../managers/urlCompressManager";

@controller()
@singleton()
export class UrlController extends StaticController{

    @inject() urlCompressManager: UrlCompressManager;

    @get("/")
    public async getAll(){
        return this.urlCompressManager.getAll();
    }

    @post("/:url")
    public async create(@params("url") url: string){
        return this.urlCompressManager.compressUrl(decodeURIComponent(url));
    }

}

