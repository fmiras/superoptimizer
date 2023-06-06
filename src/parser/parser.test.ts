/**
 *     #[test]
    fn from_str_valid_operation() {
        let op = "LOAD 0".parse::<Operation>();
        assert!(op.is_ok());
        assert_eq!(op.unwrap(), Operation::Load(0));
    }

    #[test]
    fn from_str_invalid_operation() {
        let op = "INVALID 1".parse::<Operation>();
        assert!(op.is_err());
        let error = op.unwrap_err();
        assert_eq!(error, ParseError::InvalidOp);
    }

    #[test]
    fn from_str_no_args_operation() {
        let op = "INC".parse::<Operation>();
        assert!(op.is_err());
        let error = op.unwrap_err();
        assert_eq!(error, ParseError::NoArgs);
    }

    #[test]
    fn can_parse() {
        let assembly = "LOAD 0\nSWAP 1, 2\nXOR 3, 4\nINC 5";
        let result = parse(assembly);
        assert!(result.is_ok());
        let parsed = result.unwrap();
        let expected = vec![
            Operation::Load(0),
            Operation::Swap(1, 2),
            Operation::Xor(3, 4),
            Operation::Inc(5),
        ];
        assert!(parsed.iter().all(|op| expected.contains(op)));
    }

    #[test]
    fn cant_parse_invalid() {
        let assembly = "LOAD 0\nSWAP 1, 2\nXOR 3, 4\nINVALID 1\nINC 5";
        let result = parse(assembly);
        assert!(result.is_err());
        let error = result.unwrap_err();
        assert_eq!(error, ParseError::InvalidOp);
    }

    #[test]
    fn can_output() {
        let program = vec![
            Operation::Load(0),
            Operation::Swap(1, 2),
            Operation::Xor(3, 4),
            Operation::Inc(5),
        ];
        let output = output(&program);
        let expected = "LOAD 0\nSWAP 1, 2\nXOR 3, 4\nINC 5";
        assert_eq!(output, expected);
    }

    #[test]
    fn can_parse_and_output() {
        let assembly = "LOAD 0\nSWAP 1, 2\nXOR 3, 4\nINC 5";
        let result = parse(assembly);
        assert!(result.is_ok());
        let parsed = result.unwrap();
        let output = output(&parsed);
        let expected = "LOAD 0\nSWAP 1, 2\nXOR 3, 4\nINC 5";
        assert_eq!(output, expected);
    }

 */

import { expect, test } from 'bun:test'
import { output, parse } from './parser'

test('parse(program) valid program', () => {
  const program = `LOAD 0
SWAP 1, 2
XOR 3, 4
INC 5`
  const expected = [
    { opCode: 'LOAD', args: [0] },
    { opCode: 'SWAP', args: [1, 2] },
    { opCode: 'XOR', args: [3, 4] },
    { opCode: 'INC', args: [5] }
  ]
  expect(parse(program)).toEqual(expected)
})

test('parse(program) invalid program', () => {
  const program = `LOAD 0
SWAP 1, 2
XOR 3, 4
INVALID 1
INC 5`
  expect(() => parse(program)).toThrow('Invalid opCode: INVALID')
})

test('parse(program) invalid line', () => {
  const program = `INC`
  expect(() => parse(program)).toThrow('Invalid code at: INC')
})

test('output(program) valid program', () => {
  const program = [
    { opCode: 'LOAD', args: [0] },
    { opCode: 'SWAP', args: [1, 2] },
    { opCode: 'XOR', args: [3, 4] },
    { opCode: 'INC', args: [5] }
  ]

  const expected = `LOAD 0
SWAP 1, 2
XOR 3, 4
INC 5
`
  expect(output(program)).toEqual(expected)
})
