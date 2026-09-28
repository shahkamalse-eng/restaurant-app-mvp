# Restaurant App MVP — Fall 2026

Frontend-only React Native/Expo prototype prepared against Assignment No. 1.

## Install & Run
1. Install Node.js LTS and Expo-compatible tooling.
2. `npm install`
3. `npx expo start`
4. Open with Expo Go or an Android emulator.

## Mock Login
- Customer: `customer@restaurant.app` / `Customer123`
- Manager: `manager@restaurant.app` / `Manager123`

## Scope
No backend, external API, real payment gateway, push notification service, or remote database is used. AsyncStorage is used only for local persistence of mock orders/menu edits.

## Hook Coverage
| Hook | Usage |
|---|---|
| useState | Login, Menu, Profile, Reservation, Summary |
| useEffect | Menu loading/header, persistence, tracking timers |
| useRef | Menu input/list/render counter |
| useContext | Auth, Theme, Cart, Orders, Menu |
| useReducer | Cart and Orders |
| useMemo | Menu derived list and order totals |
| useCallback | Menu add handler and form updates |
| Custom hooks | useForm, useDebounce, useReservation, useAuth, useTheme, useCart, useOrders, useMenu |

## Why Context?
Context suits cross-screen data such as authentication, theme, cart, orders, and menu edits because these values are needed by distant screens without passing props through unrelated components. It keeps providers near the application root and makes consumers simple. A drawback is that consumers can re-render when a context value changes, so state should be split by responsibility and values should be memoized when profiling shows a need.

## useReducer vs useState
The cart contains many related transitions: add, remove, increment, decrement, notes, and promos. `useReducer` keeps these transitions centralized and predictable. `useState` would have been sufficient for a tiny cart with only one or two independent values.

## Optimization Note
`useMemo` and `useCallback` should not be added automatically. They add complexity and have their own comparison/memory costs. Use them when derived work is expensive, stable function identity matters to memoized children, or profiling demonstrates unnecessary work.

## Demo Video
Add the final screen-recording URL here before submission.

## Assignment Structure
- `A1/SRS.pdf`
- `A1/UML/*.png`
- `A1/UML/*.puml`
- `src/components`
- `src/screens`
- `src/context`
- `src/reducers`
- `src/hooks`
- `src/data`
- `src/navigation`
