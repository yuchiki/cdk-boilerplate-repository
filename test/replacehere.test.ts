import * as cdk from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'

import { ReplacehereStack } from '../lib/replacehere-stack'

test('snapshot test', () => {
  const app = new cdk.App()
  const stack = new ReplacehereStack(app, 'Replacehere')
  const template = Template.fromStack(stack).toJSON()

  expect(template).toMatchSnapshot()
})
