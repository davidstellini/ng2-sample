import {it, describe, expect, beforeEach, inject } from '@angular/core/testing';

import {AboutMeComponent} from '../../../../src/app'; //yuck

describe('aboutMe', () => {

  let aboutMe : AboutMeComponent = new AboutMeComponent();

  it('should have initial properties set', () => {
    expect(aboutMe.test).toBe('Hello from NG2!');
  });

});
