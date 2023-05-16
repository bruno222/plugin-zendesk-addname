import React from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';

const PLUGIN_NAME = 'ZendeskAddnamePlugin';

export default class ZendeskAddnamePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    if (!(window as any).ZAFClient) {
      throw new Error(
        `@@@ plugin-zendesk-addname - Error 1: Cannot find any Zendesk instance on the page. Perhaps your main plugin of Zendesk (not this one, the one you enable within Flex) is disabled?`
      );
    }

    const zd = (window as any).ZAFClient.init(null, new URL(window.location.href));

    if (!zd) {
      throw new Error(`@@@ plugin-zendesk-addname - Error 2: Strange, but "zd" was not loaded corectly. I dont know why.`);
    }

    // for quick testing
    // await zd.invoke('routeTo', 'user', '4809984466455');

    window.Twilio.Flex.Actions.addListener('afterAcceptTask', async (payload) => {
      console.log(`@@@ plugin-zendesk-addname - attributes: `, payload.task.attributes);
      const { zdUser } = payload.task.attributes;
      zdUser && (await zd.invoke('routeTo', 'user', zdUser));
    });
  }
}
