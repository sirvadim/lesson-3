import React from 'react'

import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { styled } from '@ui/theme'
import {
  Header,
  ButtonAccent,
  SelectField,
  CheckboxWithText,
  TextField,
  RequestStatus,
  ModalTime,
} from '@ui/molecules'
import { DeliveryTime } from '@ui/organisms'
import 'react-router-modal/css/react-router-modal.css'
import Modal from 'react-modal'
const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

export class Exchange extends React.Component {
  constructor({
    fromValue,
    toValue,
    changeCode,
    confirmNumber,
    setFromValue,
    setToValue,
    setRub,
    setGbp,
  }) {
    super()
    console.log(this.props)
    console.log(this)
    console.log(
      'constructior',
      fromValue,
      toValue,
      // changeCode(),
      setFromValue(),
      confirmNumber(),
    )
    this.state = {
      modalIsOpen: false,
      to: false,
    }

    this.openModalFrom = this.openModalFrom.bind(this)
    this.openModalTo = this.openModalTo.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.setFromValueCb = this.setFromValueCb.bind(this)
    this.setToValueCb = this.setToValueCb.bind(this)
    this.changeGbpToRub = this.changeGbpToRub.bind(this)
    this.changeRubToGbp = this.changeRubToGbp.bind(this)
  }

  openModalFrom() {
    this.setState({ modalIsOpen: true, to: false })
  }

  openModalTo() {
    this.setState({ modalIsOpen: true, to: true })
  }

  afterOpenModal() {}

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  componentDidMount() {
    Modal.setAppElement('body')
  }

  setFromValueCb(value) {
    this.props.setFromValue(value)
    this.closeModal()
  }

  setToValueCb(value) {
    this.props.setToValue(value)
    console.log(this.props.toValue)
    this.closeModal()
  }

  changeGbpToRub(value) {
    console.log(value)
    this.props.setRub(value * 100)
  }

  changeRubToGbp(value) {
    console.log(value)
    this.props.setGbp(value / 100)
  }

  render() {
    return (
      <PageTemplate>
        <Header icon="back" />
        <Flex1>
          <Wrapper>
            <SelectField
              label="Страна 1"
              value="Россия"
              onPress={() => undefined}
            />
            <SelectField
              label="Страна 2"
              value="Англия"
              onPress={() => undefined}
            />
            <Divider />
            <HBox />
            <TextField
              label="Российский рубль (RUB)"
              onChange={value => {
                this.props.setRub(value)
                this.changeRubToGbp(value)
              }}
              tip="Текст подсказки к полю"
              value={this.props.rub}
              endAdornment="₽"
            />
            <HBox />
            <TextField
              label="Фунт стерлингов (GBP)"
              onChange={value => {
                this.props.setGbp(value)
                this.changeGbpToRub(value)
              }}
              value={this.props.gbp}
              tip="Текст подсказки к полю"
              endAdornment="£"
            />
            <HBox />
            <DeliveryTime
              disabled={this.props.fromValue ? false : true}
              fromValue={this.props.fromValue}
              toValue={this.props.toValue}
              fromAction={() => {
                this.openModalFrom()
              }}
              toAction={() => {
                this.openModalTo()
              }}
              tip="Выберите время доставки"
            />
            <HBox />
            <CheckboxWithText onPress={() => undefined}>
              Со всеми условиями согласен, возможно вторая строка
            </CheckboxWithText>
          </Wrapper>
        </Flex1>
        <Wrapper>
          <ButtonAccent onPress={() => undefined}>Отправить</ButtonAccent>
        </Wrapper>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <ModalTime
            to={this.state.to}
            fromCb={this.setFromValueCb}
            toCb={this.setToValueCb}
            min={this.state.to ? this.props.fromValue : '09:00'}
          />
        </Modal>
      </PageTemplate>
    )
  }
}
