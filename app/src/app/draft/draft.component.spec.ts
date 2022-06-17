
import { DraftComponent } from './draft.component';

describe('DraftComponent', () => {
  let component: DraftComponent;

  it('should create', () => {
    const component = new DraftComponent()
    
    expect(component).toBeTruthy();
  });

  it('has a placeholder', () => {
    const component = new DraftComponent()

    const placeholder = component.placeholder

    expect(placeholder).toBe('Escribe aquí tu nota')
  })
});
