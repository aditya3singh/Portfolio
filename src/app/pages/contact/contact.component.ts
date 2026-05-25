import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PROFILE } from '../../core/constants/profile';

type SubmitState = 'idle' | 'sending' | 'sent';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly profile = PROFILE;
  readonly mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    PROFILE.mapEmbed
  );
  submitState: SubmitState = 'idle';
  mapLoaded = false;

  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  onMapLoad(): void {
    this.mapLoaded = true;
  }

  onSubmit(): void {
    if (this.form.invalid || this.submitState !== 'idle') {
      this.form.markAllAsTouched();
      return;
    }

    this.submitState = 'sending';

    setTimeout(() => {
      this.submitState = 'sent';
      setTimeout(() => {
        this.submitState = 'idle';
        this.form.reset();
      }, 3000);
    }, 1500);
  }
}
