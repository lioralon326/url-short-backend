import {init, inject, singleton, define} from '@appolo/inject';
import {Guid} from "@appolo/utils";
import {assignWith} from "lodash";
@define()
@singleton()
export class CompressUrlService{

    private readonly OwnedDomain = "http://srt.il";

    public async getRandomUrl(length: number = 6){
        const guid = await Guid.nanoid(length);
        return `${this.OwnedDomain}/${guid}`;
    }

}
