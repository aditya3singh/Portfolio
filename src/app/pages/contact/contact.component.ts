import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PROFILE } from '../../core/constants/profile';
import { ContactService } from '../../core/services/contact.service';

type SubmitState = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly contactService = inject(ContactService);
  private readonly fb = inject(FormBuilder);

  readonly profile = PROFILE;
  readonly mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    PROFILE.mapEmbed
  );
  submitState: SubmitState = 'idle';
  errorMessage = '';
  mapLoaded = false;

  readonly form = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  onMapLoad(): void {
    this.mapLoaded = true;
  }

  onSubmit(): void {
    if (this.form.invalid || this.submitState === 'sending') {
      this.form.markAllAsTouched();
      return;
    }

    this.submitState = 'sending';
    this.errorMessage = '';

    const { fullname, email, message } = this.form.getRawValue();

    this.contactService
      .sendMessage({
        fullname: fullname!.trim(),
        email: email!.trim(),
        message: message!.trim(),
      })
      .subscribe({
        next: () => {
          this.submitState = 'sent';
          setTimeout(() => {
            this.submitState = 'idle';
            this.form.reset();
          }, 3000);
        },
        error: (err: Error) => {
          this.submitState = 'error';
          this.errorMessage = err.message;
        },
      });
  }
}
