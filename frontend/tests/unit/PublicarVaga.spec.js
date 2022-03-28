import { mount } from '@vue/test-utils'
import PublicarVaga from '@/components/views/PublicarVaga.vue'
import ListaVagas from '@/components/common/ListaVagas.vue'

describe('PublicarVaga.vue', () => {
  test('Simulação de envio do Form', async () => {
    const wrapper = mount(PublicarVaga)

    // Input de título da vaga
    const title = wrapper.find('#title')
    await title.setValue('Desenvolvedor de Testes')

    expect(title.element.value).toBe('Desenvolvedor de Testes')

    // Input de descrição da vaga
    const description = wrapper.find('#description')
    await description.setValue('Saber usa Jest em aplicações VueJs')

    expect(description.element.value).toBe('Saber usa Jest em aplicações VueJs')

    // Input do salário da vaga
    const salary = wrapper.find('#salary')
    salary.element.value = 5000

    expect(salary.element.value).toBe('5000')

    // // Input da modalidade da vaga
    const modality = wrapper.find('#modality').element
    modality.value = 2

    expect(modality.value).toEqual('2')

    // // Input do tipo da vaga
    const type = wrapper.find('#type')
    await type.setValue(1)

    expect(type.element.value).toEqual('1')

  })

  test('Get element by id = "data-test" ', () => {
    const wrapper = mount(PublicarVaga)

    const titlePage = wrapper.get('[ data-test="title" ]')

    expect(titlePage.text()).toBe('Apresente sua vaga para milhares de profissionais e de graça')
  })

  test('Get all input, select, textarea element in PublicarVaga.vue', () => {
    const wrapper = mount(PublicarVaga)

    expect(wrapper.findAll('input')).toHaveLength(2)
    expect(wrapper.findAll('select')).toHaveLength(2)
    expect(wrapper.findAll('textarea')).toHaveLength(1)
  })

  // test('Send form', async () => {
  //   const wrapper = mount(PublicarVaga)

  //   await wrapper.find('#title').setValue("Desenvolvedor Jest")
  //   await wrapper.find('#description').setValue("Desenvolvedor Jest")
  //   await wrapper.find('#salary').setValue(4000)
  //   await wrapper.find('#modality').setValue(1)
  //   await wrapper.find('#type').setValue(2)
  //   await wrapper.get('[ data-test="buttonNewVacancy" ]').trigger('click')

  //   expect(wrapper.findAll('[ data-test="vacancy" ]')).toHaveLength(1)
    
  // })

})
