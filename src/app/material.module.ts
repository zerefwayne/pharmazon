import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule],
  exports: [MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule]
})

export class MaterialModule {}
