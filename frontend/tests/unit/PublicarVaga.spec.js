import { mount } from '@vue/test-utils'
import PublicarVaga from '@/components/views/PublicarVaga.vue'

describe('PublicarVaga.vue', () => {
  test('Simulação de envio do Form', async () => {
    const wrapper = mount(PublicarVaga)

    // Input de título da vaga
    const title = wrapper.find('#title')
    await title.setValue('Desenvolvedor de Testes')
    title.trigger('input')

    expect(title.element.value).toBe('Desenvolvedor de Testes')

    // Input de descrição da vaga
    const description = wrapper.find('#description')
    await description.setValue('Saber usa Jest em aplicações VueJs')
    description.trigger('input')

    expect(description.element.value).toBe('Saber usa Jest em aplicações VueJs')

    // Input do salário da vaga
    const salary = wrapper.find('#salary')
    // await salary.setValue(5000)
    salary.element.value = 5000
    salary.trigger('input')

    expect(salary.element.value).toBe('5000')

    // // Input da modalidade da vaga
    const modality = wrapper.find('#modality').element
    modality.value = 2
    modality.dispatchEvent(new Event('change'))

    expect(modality.value).toEqual('2')

    // // Input do tipo da vaga
    const type = wrapper.find('#type')
    await type.setValue(2)

    type.trigger('change')

    expect(type.element.value).toEqual('2')

  })

})
