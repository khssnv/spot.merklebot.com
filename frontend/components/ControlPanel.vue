<template>
  <div>
    <span>
      <p>Queued: {{ queueSize }}</p>
      <p>Robot state: {{ robotState }}</p>
      <p v-if="lastSessionId && robotState==='idle'" class="text-purple-500"> <NuxtLink :to="`/records/${lastSessionId}`">Last session: {{ lastSessionId }}</NuxtLink></p>

      <ul style="list-style: none; padding: 0">
        <li>Robot status: {{ cps.status }}</li>
        <li v-if="cps.launch.txStatus">
          Transaction status: {{ cps.launch.txStatus }}
        </li>
        <li v-if="cps.launch.txInfo">
          View transaction:
          <a
            :href="
              'https://robonomics.subscan.io/extrinsic/' + cps.launch.txInfo.tx
            "
            target="_blank"
            rel="noopener noreferrer"
          >{{ addressShort(cps.launch.txInfo.tx) }}</a>
        </li>
      </ul>
    </span>
  </div>
</template>

<script>

import {
  makeLaunchTx,
  makeTransferTx,
  signAndSendTxWithActiveAccount,
  signAndSendTxsBatchWithActiveAccount
} from '@/plugins/robonomics'

export default {
  name: 'ControlPanel',
  data () {
    return {
      queueSize: null,
      robotState: null,
      lastSessionId: null,
      cps: {
        address: '4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j',
        status: 'unknown',
        launch: {
          txInfo: null,
          txStatus: null
        }
      }

    }
  },
  mounted () {
    this.doRobotStatePolling()
  },
  methods: {
    async launchCps (transferXrtAmount) {
      this.cps.launch.txInfo = { tx: null }
      this.cps.launch.txStatus = null
      const launchTx = await makeLaunchTx(this.cps.address, true)
      this.cps.status = 'wait_tx'
      if (transferXrtAmount) {
        const transferTx = await makeTransferTx(this.cps.address, transferXrtAmount)
        this.cps.launch.txInfo = await signAndSendTxsBatchWithActiveAccount([launchTx, transferTx])
      } else {
        this.cps.launch.txInfo = await signAndSendTxWithActiveAccount(launchTx)
      }
      this.cps.launch.txStatus = 'accepted'
      this.cps.status = 'activated'
      return true
    },
    addressShort (address) {
      return address.slice(0, 6) + '...' + address.slice(-4)
    },
    async updateRobotState () {
      // const response = await fetch('http://10.200.0.3:1234/current_state', { method: 'GET' })
      const response = await fetch('https://api.merklebot.com/strelka/current_state', { method: 'GET' })
      const json = await response.json()

      this.robotState = json.robot_state
      this.queueSize = json.queue_size
      this.lastSessionId = json.last_session_id
      return true
    },
    async doRobotStatePolling () {
      try {
        await this.updateRobotState()
      } catch (e) {
        console.log('Spot state unavailable, retrying')
      }
      setTimeout(this.doRobotStatePolling, 1000)
    }
  }
}
</script>

<style scoped>

</style>
