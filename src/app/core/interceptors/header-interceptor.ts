import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {


    if (!(request.body instanceof FormData)) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });

    } else {
      request = request.clone({
        headers: request.headers.set('Accept', 'multipart/form-data'),
      });
    }
    if (request.responseType == 'blob') {
      request = request.clone({
        responseType: 'blob',
      });
    }


    let url = request.url;
    if (!url.startsWith('./assets')) {
      url = environment.BASE_URL + url;
      request = request.clone({
        url: url,
      });
    }
    request = request.clone({
      headers:request.headers.set('Accept-Language', "en")
    });
    request = request.clone({
      headers: request.headers.set('Local-Time-Zone', Intl.DateTimeFormat().resolvedOptions().timeZone)
    });
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      })
    );
  }
}
