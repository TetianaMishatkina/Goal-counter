import {Injectable} from "@angular/core";

@Injectable()
export class ImgService{
  public getImages(): Promise<string>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve("https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/41/4118054/Smartfon-APPLE-14-Pro-Gleboka-purpura-1.jpg");
      },1000)
    })
  }
}
