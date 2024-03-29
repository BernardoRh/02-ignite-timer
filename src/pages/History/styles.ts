import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem 0;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HistoryList = styled.main`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  @media (max-width: 786px) {
    * {
      font-size: 0.5rem !important;
    }
  }
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background: ${(props) => props.theme['gray-700']};
      background-image: linear-gradient(
        to top,
        ${(props) => props.theme['gray-700']},
        ${(props) => props.theme['green-700-40pc']}
      );
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }
      @media (max-width: 786px) {
        &:first-child {
          width: 30%;
          padding-left: 1.5rem;
        }
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }

    tfoot {
      tr {
        td {
          color: transparent;
          background: ${(props) => props.theme['gray-700']};
          background-image: linear-gradient(
            ${(props) => props.theme['gray-700']},
            ${(props) => props.theme['green-700-40pc']}
          );
          min-width: 24px;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          overflow: hidden;
          cursor: default;
        }
      }
    }
  }
`
const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
