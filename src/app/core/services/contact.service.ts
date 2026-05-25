import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

export interface ContactPayload {
  fullname: string;
  email: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  sendMessage(payload: ContactPayload): Observable<void> {
    return this.http.post<{ success?: boolean; error?: string }>('/api/contact', payload).pipe(
      map((res) => {
        if (res.error) {
          throw new Error(res.error);
        }
      }),
      catchError((err) => {
        const message =
          err.error?.error ||
          err.message ||
          'Could not send message. On localhost, run `npx vercel dev` or deploy to Vercel with Gmail env vars set.';
        return throwError(() => new Error(message));
      })
    );
  }
}
