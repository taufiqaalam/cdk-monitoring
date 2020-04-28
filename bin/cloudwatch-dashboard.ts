#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CloudwatchDashboardStack } from '../lib/cloudwatch-dashboard-stack';

const app = new cdk.App();
new CloudwatchDashboardStack(app, 'CloudwatchDashboardStack');
