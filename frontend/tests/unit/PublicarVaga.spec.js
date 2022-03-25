import { mount, shallowMount } from '@vue/test-utils'
import PublicarVaga from '@/components/views/PublicarVaga.vue'

jest.mock('../../src/components/views/PublicarVaga.vue')

describe('PublicarVaga.vue', () => {
  test('Simulação de envio do Form', async () => {
    const wrapper = mount(PublicarVaga)

    // Input de título da vaga
    const title = wrapper.find('#title')
    await title.setValue('Desenvolvedor de Testes')

    title.element.value = value
    title.trigger('input')
    expect(title.element.value).toBe('Desenvolvedor de Testes')

    // Input de descrição da vaga
    // const description = wrapper.find('#description')
    // await description.setValue('Saber usa Jest em aplicações VueJs')

    // expect(description.element.value).toBe('Saber usa Jest em aplicações VueJs')

    // // Input do salário da vaga
    // const salary = wrapper.find('#salary')
    // salary.setValue(5000)

    // expect(salary.element.value).toBe(5000)

    // // Input da modalidade da vaga
    // const modality = wrapper.find('#modality')
    // modality.setValue('Home Office')

    // expect(modality.element.value).toBe('Home Office')

    // // Input do tipo da vaga
    // const type = wrapper.find('#type')
    // type.setValue('PJ')

    // expect(type.element.value).toBe('PJ')


    // await wrapper.vm.nextTick()
  })

  test('Jest doc', () => {
    const wrapper = mount(PublicarVaga)
    expect(wrapper.element)

  })
})
