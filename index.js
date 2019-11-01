import cmdParser from 'commander';
import pkg from './package.json';



export function cli(arg){
    cmdParser.version(pkg.version, '-v, --version').usage('<command> [options]');
    cmdParser.parse(arg);
    console.log('cli start');
}