import { AppComponent } from './app.component'
import { AppService } from './app.service'

describe('AppComponent', () => {
  let service: AppService;

  it('should return title', () => {
    const component = new AppComponent(service)
    const result = component.title

    expect(result).toBe('Voicedown')
  })
})
