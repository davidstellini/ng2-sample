import {BaseRequestOptions, Headers, RequestOptions, RequestOptionsArgs} from '@angular/http';

export class GithubApiRequestOptions extends BaseRequestOptions {
  headers: Headers = new Headers({
          'Accept': 'application/vnd.github.3.raw'
  });

  merge(options?: RequestOptionsArgs): RequestOptions {
    options.url = 'https://api.github.com/repos/davidstellini' +
          '/code-pulit/contents/data/' +
          options.url +
          '/index.json?ref=feature/data-architecture'; // note: The ref must be
          // remved before merge - it specifies the branch to take data from.
    return super.merge(options);
  }

}
