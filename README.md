# How it works

<p align="center" width="100%" target="_blank">
    <a href="https://www.loom.com/share/10b34cdcabcd4bf3ac56dac0c73d914e">
      <img width="70%" src="https://cdn.loom.com/sessions/thumbnails/10b34cdcabcd4bf3ac56dac0c73d914e-with-play.gif">
    </a
</p>

# Pre-requisite

This plugin only works when the official out-of-the-box Zendesk plugin is also installed. [So make sure to install this official plugin first](https://www.twilio.com/docs/flex/admin-guide/integrations/zendesk).

# To install it

```
twilio flex:plugins:deploy -l debug --changelog "zendesk addname"
twilio

flex:plugins:release .... ... (just copy and paste the full cli command that is appeared from the output of the previous command)
```

# To use it

Create a task with this attributes:

```
{"name":"bruno test","zdUser":"4809984466455"}
```

Where `4809984466455` is the ID of the user in your Zendesk instance (that you can get from any URL where you are seeing the customer, example: `https://xxx.zendesk.com/agent/users/4809984466455/requested_tickets`)

And that is it! You will be able to render "bruno test" within Flex before acepting the call and, once accepted, Zendesk will pop the customer id `4809984466455`.
