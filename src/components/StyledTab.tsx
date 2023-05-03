import type { TabsProps } from '@mantine/core';
import { Tabs, rem } from '@mantine/core';

function StyledTab(props: TabsProps) {
  return (
    <Tabs
      unstyled
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : 'transparent',
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[0]
              : theme.colors.dark[6],
          border: `${rem(1)} solid ${
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[4]
          }`,
          padding: `${theme.spacing.xs} ${theme.spacing.md}`,
          cursor: 'pointer',
          fontSize: theme.fontSizes.sm,
          display: 'flex',
          alignItems: 'center',
          margin: '0 4px',

          '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
          },

          '&:not(:first-of-type)': {
            borderLeft: 0,
          },

          '&:first-of-type': {
            borderRadius: '20px',
          },

          '&:last-of-type': {
            borderRadius: '20px',
          },

          '&[data-active]': {
            backgroundColor: theme.colors.dark[6],
            borderColor: theme.colors.dark[6],
            color: theme.white,
          },
        },
        tabIcon: {
          marginRight: theme.spacing.xs,
          display: 'flex',
          alignItems: 'center',
        },

        tabsList: {
          display: 'flex',
        },
      })}
      {...props}
    />
  );
}

export default StyledTab;
