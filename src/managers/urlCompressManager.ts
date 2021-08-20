import {init, inject, singleton, define} from '@appolo/inject';
import { RedisProvider } from '@appolo/redis';
import {CompressUrlService} from "../services/CompressUrlService";

@define()
@singleton()
export class UrlCompressManager {

    @inject() private redisProvider: RedisProvider;
    @inject() private compressUrlService: CompressUrlService;

    private readonly activeDurationSeconds = 60 * 60 * 24;

    public async getAll(): Promise<{[p: string]: string}>{
        return this.redisProvider.scanKeysValues("*");
    }

    public async compressUrl(url: string): Promise<string>{
        const compressedUrl = await this.compressUrlService.getRandomUrl();
        await this.redisProvider.setWithExpire(compressedUrl, url, this.activeDurationSeconds);
        return compressedUrl;
    }

}
