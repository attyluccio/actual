import { Modal, ModalCloseButton, ModalHeader } from '../../common/Modal';
// import { Command } from 'cmdk';
import { View } from '../../common/View';
// import './vercel.scss';
// import { Input } from '../../common/Input';
import { theme } from '../../../style';
import { CSSProperties } from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './command';
import { css } from '@emotion/css';
import { SvgAdd } from '../../../icons/v0';
import {
  SvgCalendar,
  SvgCheveronDown,
  SvgCheveronRight,
  SvgCog,
  SvgReports,
  SvgStoreFront,
  SvgTuning,
  SvgWallet,
} from '../../../icons/v1';
import { useNavigate } from '../../../hooks/useNavigate';
import { useTranslation } from 'react-i18next';

type CommandKModalProps = {};

export function CommandKModal({}: CommandKModalProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Modal
      name="command-k"
      containerProps={{
        style: { backgroundColor: theme.cardBackground },
      }}
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
            <Command>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandItem onSelect={() => navigate('/budget')}>
                  <SvgWallet
                    height={16}
                    width={16}
                    style={{ marginRight: 10 }}
                  />
                  {t('Budget')}
                </CommandItem>
                <CommandItem onSelect={() => navigate('/reports')}>
                  <SvgReports
                    height={16}
                    width={16}
                    style={{ marginRight: 10 }}
                  />
                  {t('Reports')}
                </CommandItem>
                <CommandItem onSelect={() => navigate('/schedules')}>
                  <SvgCalendar
                    height={16}
                    width={16}
                    style={{ marginRight: 10 }}
                  />
                  {t('Schedules')}
                </CommandItem>
                <CommandSeparator />
                {/* <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <SvgAdd
                      style={{ height: 16, width: 16, marginRight: 10 }}
                    />
                    Calendar
                  </CommandItem>
                  <CommandItem>Search Emoji</CommandItem>
                  <CommandItem>Calculator</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>
                    Profile
                    <CommandShortcut>we</CommandShortcut>
                  </CommandItem>
                  <CommandItem>Billing</CommandItem>
                  <CommandItem>Settings</CommandItem>
                </CommandGroup> */}
              </CommandList>
            </Command>
          </View>
        </>
      )}
    </Modal>
  );
}
