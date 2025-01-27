---
title: useDLE()
---
import PkgTabs from '@site/src/components/PkgTabs';
import GenericsTabs from '@site/src/components/GenericsTabs';

<GenericsTabs>

```typescript
function useDLE(
  endpoint: ReadEndpoint,
  ...args: Parameters<typeof endpoint> | [null]
): { data: Denormalize<typeof endpoint.schema>, loading: boolean, error: Error | undefined };
```

```typescript
function useDLE<
  E extends EndpointInterface<FetchFunction, Schema | undefined, undefined>,
  Args extends readonly [...Parameters<E>] | readonly [null],
>(
  endpoint: E,
  ...args: Args
): { data: DenormalizeNullable<typeof endpoint.schema>, loading: boolean, error: Error | undefined };
```

</GenericsTabs>

In case you cannot use suspense, useDLE() is just like [useSuspense()](./useSuspense.md) but returns [D]ata [L]oading [E]rror values.

## Hook usage

<details><summary><b>resources/ProfileResource.ts</b></summary>

```typescript
export default class ProfileResource extends Resource {
  readonly id: number | undefined = undefined;
  readonly img: string = '';
  readonly fullName: string = '';
  readonly bio: string = '';

  pk() {
    return this.id?.toString();
  }
  static urlRoot = '/profiles';
}
```

</details>

#### `ProfileList.tsx`

```tsx
import { useDLE } from 'rest-hooks';
import { Skeleton, Card, Avatar } from 'antd';
import ProfileResource from 'resources/ProfileResource';

const { Meta } = Card;

function ProfileList() {
  const { data, loading, error } = useDLE(
    ProfileResource.list(),
    {},
  );
  if (error) return <div>Error {error.status}</div>
  return (
    <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
      <Meta
        avatar={
          <Avatar src={data.img} />
        }
        title={data.fullName}
        description={data.bio}
      />
    </Card>
  );
}
```

