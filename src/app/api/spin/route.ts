import { cookies } from 'next/headers';
import log from '@/lib/logger.ts';
import { SpinResponse, SpinUpdateRequest, ApiError } from '@/types/api';

export async function GET(): Promise<Response> {
  try {
    const resolvedCookies = await cookies();
    const spins = resolvedCookies.get('spins');

    const data: SpinResponse = {
      spins: spins ? parseInt(spins.value, 10) : 0,
    };

    return Response.json(data);
  } catch (error) {
    await log('api/spin/get', JSON.stringify(error));

    const errorData: ApiError = {
      message: 'Error fetching spins',
    };

    return Response.json(errorData, { status: 500 });
  }
}

export async function POST(request: Request): Promise<Response> {
  try {
    const body: SpinUpdateRequest = await request.json();
    const { spins } = body;

    if (typeof spins !== 'number' || spins < 0) {
      const errorData: ApiError = {
        message: 'Invalid spins value',
      };
      return Response.json(errorData, { status: 400 });
    }

    const resolvedCookies = await cookies();
    resolvedCookies.set('spins', spins.toString());

    const data: SpinResponse = {
      spins,
    };

    return Response.json(data);
  } catch (error) {
    await log('api/spin/post', JSON.stringify(error));

    const errorData: ApiError = {
      message: 'Error updating spins',
    };

    return Response.json(errorData, { status: 500 });
  }
}
