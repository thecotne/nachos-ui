import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Card from '../Card'

it('should render correctly', () => {
  const component = renderer.create(
    <Card footerContent='Footer content' image='image.jpg' />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('should render custom footerContent', () => {
  const View = require("View"); // eslint-disable-line
  const Text = require("Text"); // eslint-disable-line
  const component = renderer.create(
    <Card
      footerContent={
        (
          <View style={{ position: 'absolute' }}>
            <Text>Custom footer content</Text>
          </View>
        )
      }
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
