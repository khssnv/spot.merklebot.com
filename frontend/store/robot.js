import { defineStore } from 'pinia'
import {
  makeLaunchTx,
  makeTransferTx,
  signAndSendTxWithActiveAccount,
  signAndSendTxsBatchWithActiveAccount
} from '@/plugins/robonomics'

export const useRobot = defineStore('robot', {
  state: () => {
    return {
      queueSize: null,
      robotState: null,
      lastSessionId: null,
      cps: {
        address: '4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j',
        status: 'unknown',
        launch: {
          txInfo: {
            tx: null
          },
          txStatus: null
        }
      }

    }
  },
  actions: {
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
      return this.cps.launch
    },
    async updateRobotState () {
      // const response = await fetch('http://10.200.0.3:1234/current_state', { method: 'GET' })
      try {
        const response = await fetch('https://api.merklebot.com/strelka/current_state', { method: 'GET' })
        const json = await response.json()
        this.robotState = json.robot_state
        this.queueSize = json.queue_size
        this.lastSessionId = json.last_session_id
        return true
      } catch {
        this.robotState = null
        this.queueSize = null
        this.lastSessionId = null
        return false
      }
    },
    sendDrawing (segments, paymentMode = 'ticket', txId = '') {
      fetch('https://api.merklebot.com/strelka/draw_figure', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          segments,
          payment_mode: paymentMode,
          tx_id: txId
        })
      }).then(response => response.json()).then((data) => {
        console.log(data)
      })
    }

  }
})
