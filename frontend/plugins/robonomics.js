import { Robonomics } from 'robonomics-interface'
import AccountManager from 'robonomics-interface/dist/accountManagerUi'
import keyring from '@polkadot/ui-keyring'
import { blake2AsHex } from '@polkadot/util-crypto'

let robonomics

export const getInstance = async () => {
  if (robonomics) { return robonomics }
  robonomics = new Robonomics({
    endpoint: 'wss://kusama.rpc.robonomics.network/'
  })
  robonomics.setAccountManager(new AccountManager(keyring))
  await robonomics.run()
  await AccountManager.initPlugin(robonomics.accountManager.keyring)
  return robonomics
}

export const getAddresses = async () => {
  const robonomics = await getInstance()
  const accounts = await robonomics.accountManager.getAccounts()
  return accounts.map(account => account.address)
}

export const getAccounts = async () => {
  const robonomics = await getInstance()
  return await robonomics.accountManager.getAccounts()
}

export const setActiveAccount = async (address) => {
  const robonomics = await getInstance()
  await robonomics.accountManager.selectAccountByAddress(address)
}

let activeAccountBalanceUnsubscribe

export const subscribeToBalanceUpdates = async (address, onBalanceUpdate) => {
  if (activeAccountBalanceUnsubscribe) { activeAccountBalanceUnsubscribe() }
  const robonomics = await getInstance()
  activeAccountBalanceUnsubscribe = await robonomics.account.getBalance(
    address,
    onBalanceUpdate
  )
}

export const makeLaunchTx = async (targetAddress, enabledFlag) => {
  const robonomics = await getInstance()
  const tx = robonomics.launch.send(targetAddress, blake2AsHex(enabledFlag))
  return tx
}

/**
 * Transfer XRT balance from active account to recipient.
 * @param {string} recipient - Transfer destination address in Robonomics parachain format.
 * @param {number} value - Amount to transfer in Wn. 1 Wn = 1 XRT * 10^-9.
 */
export const makeTransferTx = async (recipient, value) => {
  const robonomics = await getInstance()
  const tx = robonomics.api.tx.balances.transfer(recipient, value)
  return tx
}

export const signAndSendTxWithActiveAccount = async (tx) => {
  const robonomics = await getInstance()
  const resultTx = await robonomics.accountManager.signAndSend(tx)
  return resultTx
}

/**
 * Combine multiple transactions in one, sign it with an active account and send.
 * @param {Array} txs - An array of transactions to sign and send.
 */
export const signAndSendTxsBatchWithActiveAccount = async (txs) => {
  const robonomics = await getInstance()
  const tx = await robonomics.api.tx.utility.batch(txs)
  const resultTx = await robonomics.accountManager.signAndSend(tx)
  return resultTx
}
