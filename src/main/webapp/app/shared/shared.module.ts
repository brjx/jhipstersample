import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JhipstersampleSharedLibsModule, JhipstersampleSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JhipstersampleSharedLibsModule, JhipstersampleSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipstersampleSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipstersampleSharedModule {
  static forRoot() {
    return {
      ngModule: JhipstersampleSharedModule
    };
  }
}
