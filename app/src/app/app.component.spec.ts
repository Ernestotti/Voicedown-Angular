import { AppComponent } from './app.component'
import { AppService } from './app.service'

describe('AppComponent', () => {
  let service: AppService;

  it('should return title', () => {
    const component = new AppComponent(service)
    const result = component.title

    expect(result).toBe('Voicedown')
  })

  it('should set show property', () => {
    const component = new AppComponent(service)

    const result = component.show

    expect(result).toBe(true)
  })
})
