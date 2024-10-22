import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { theme } from '../../../style';
import { css } from '@emotion/css';
import { SvgSearch } from '../../../icons/v1';

import './style.css';

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ style, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={css({
      display: 'flex',
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      overflow: 'hidden',
      borderRadius: '0.375rem',
      backgroundColor: theme.cardBackground,
      color: theme.pageText,
      ...style,
    })}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ style, ...props }, ref) => (
  <div
    className={css({
      display: 'flex',
      alignItems: 'center',
      // borderBottom: '1px solid var(--border)',
      borderBottom: theme.cardBorder,
      // padding: '0 0.75rem',
      outline: 0,
    })}
    cmdk-input-wrapper=""
  >
    {/* <Search style={{
      marginRight: '0.5rem',
      height: '1rem',
      width: '1rem',
      flexShrink: 0,
      opacity: 0.5
    }} /> */}
    <SvgSearch
      style={{
        marginRight: '0.5rem',
        height: '1rem',
        width: '1rem',
        flexShrink: 0,
        opacity: 0.5,
      }}
    />
    <CommandPrimitive.Input
      autoFocus
      ref={ref}
      className={css({
        display: 'flex',
        height: '2.75rem',
        width: '100%',
        // borderRadius: '0.375rem',
        border: 0,
        backgroundColor: theme.cardBackground,
        padding: '0.75rem 0',
        outline: 0,
        color: theme.formInputText,
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: theme.tableBorder,
        '&::placeholder': {
          opacity: 0.3,
        },
        '&:disabled': {
          cursor: 'not-allowed',
          opacity: 0.5,
        },
        ...style,
      })}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ style, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={css({
      maxHeight: '300px',
      overflowY: 'auto',
      overflowX: 'hidden',
      ...style,
    })}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className={css({
      padding: '1.5rem 0',
      textAlign: 'center',
      fontSize: '0.875rem',
    })}
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

// const CommandGroup = React.forwardRef<
//   React.ElementRef<typeof CommandPrimitive.Group>,
//   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
// >(({ style, ...props }, ref) => (
//   <CommandPrimitive.Group
//     ref={ref}
//     className={css({
//       overflow: 'hidden',
//       padding: '0.5rem',
//       color: theme.pageText,
//       '&[cmdk-group-heading]': {
//         padding: '0.5rem',
//         paddingTop: '0.375rem',
//         paddingBottom: '0.375rem',
//         fontSize: '0.75rem',
//         fontWeight: 500,
//         color: 'red !important',
//       },
//       ...style,
//     })}
//     {...props}
//   />
// ));

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ style, ...props }, ref) => (
  <div className="cmdk-container">
    <CommandPrimitive.Group ref={ref} style={style} {...props} />
  </div>
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ style, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={css({
      // marginLeft: '-0.25rem',
      // marginRight: '-0.25rem',
      height: '1px',
      backgroundColor: theme.tableBorderSeparator,
      opacity: 0.3,
      ...style,
    })}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ style, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={css({
      cursor: 'pointer',
      height: 48,
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      userSelect: 'none',
      padding: '0 16px',
      outline: 'none',
      '&[data-disabled="true"]': {
        pointerEvents: 'none',
        opacity: 0.5,
      },
      '&[data-selected="true"]': {
        backgroundColor: theme.buttonPrimaryBackground,
        color: theme.formInputText,
      },
      ...style,
    })}
    {...props}
  />
  // <CommandPrimitive.Item
  //   ref={ref}
  //   className={css({
  //     position: 'relative',
  //     display: 'flex',
  //     cursor: 'default',
  //     userSelect: 'none',
  //     alignItems: 'center',
  //     borderRadius: '0.125rem',
  //     padding: '0.5rem',
  //     outline: 'none',
  //     '&[data-disabled="true"]': {
  //       pointerEvents: 'none',
  //       opacity: 0.5,
  //     },
  //     '&[data-selected="true"]': {
  //       backgroundColor: theme.buttonPrimaryBackground,
  //       color: theme.formInputText,
  //     },
  //     ...style,
  //   })}
  //   {...props}
  // />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  style,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={css({
        marginLeft: 'auto',
        fontSize: '0.75rem',
        letterSpacing: '0.05em',
        color: theme.pageText,
        ...style,
      })}
      {...props}
    />
  );
};
CommandShortcut.displayName = 'CommandShortcut';

export {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
