import { Modal, ModalCloseButton, ModalHeader } from '../../common/Modal';
import { Command } from 'cmdk';
import { View } from '../../common/View';
import './vercel.scss';
import { Input } from '../../common/Input';
import { theme } from '../../../style';
import { CSSProperties } from 'react';
import { css } from '@emotion/css';

type CommandKModalProps = {};

const commandRootStyle = {
  background: theme.cardBackground,
};
const commandInputStyle: CSSProperties = {
  outline: 0,
  backgroundColor: theme.tableBackground,
  color: theme.formInputText,
  margin: 0,
  padding: 5,
  borderRadius: 4,
  border: '1px solid ' + theme.formInputBorder,
  width: '100%',
};
// "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
const commandItemStyle: CSSProperties = {
  contentVisibility: 'auto',
  cursor: 'pointer',
  height: '48px',
  borderRadius: '8px',
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '0 16px',
  color: theme.formInputText,
  userSelect: 'none',
  willChange: 'background, color',
  transition: 'all 150ms ease',
  '&[data-selected="true"]': {
    backgroundColor: 'blue',
  },
  '&[data-disabled="true"]': {
    opacity: 0.5,
  },
  '&:active': {
    backgroundColor: 'red',
  },
};

export function CommandKModal({}: CommandKModalProps) {
  return (
    <Modal
      name="command-k"
      // containerProps={{
      //   style: { height: '50vh', backgroundColor: 'red' },
      // }}
    >
      {({ state: { close } }) => (
        <>
          {/* <ModalHeader
            title="Command K"
            rightContent={<ModalCloseButton onPress={close} />}
          /> */}
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}
          >
            <View className="vercel_">
              <Command label="Command Menu" className={css(commandRootStyle)}>
                <Command.Input autoFocus className={css(commandInputStyle)} />
                <Command.List>
                  <Command.Empty>No results found.</Command.Empty>

                  <Command.Group heading="Letters">
                    <Command.Item className={css(commandItemStyle)}>
                      azz
                    </Command.Item>
                    <Command.Item className={css(commandItemStyle)}>
                      a
                    </Command.Item>
                    <Command.Item>b</Command.Item>
                    <Command.Separator />
                    <Command.Item>c</Command.Item>
                  </Command.Group>

                  <Command.Item>Apple</Command.Item>
                </Command.List>
              </Command>
            </View>
          </View>
        </>
      )}
    </Modal>
  );
}
