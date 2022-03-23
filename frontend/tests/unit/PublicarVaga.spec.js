import { mount } from '@vue/test-utils'
import PublicarVaga from '@/components/views/PublicarVaga.vue'

jest.mock('../../src/components/views/PublicarVaga.vue')

describe('PublicarVaga.vue', () => {
  test('Criação de uma nova vaga, Simulação de envio do Form', () => {
    const wrapper = mount(PublicarVaga)

    wrapper.find('#title').setValue('Desenvolvedor de Testes')
    wrapper.find('#description').setValue('Saber usa Jest em aplicações VueJs')
    wrapper.find('#salary').setValue(4000)
    wrapper.find('#modality').setValue('Home Office')
    wrapper.find('#type').setValue('PJ')
    // wrapper.find('form').trigger('submit')

    expect().toBe()
  })
})
